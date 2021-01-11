import Swal from 'sweetalert2';
import axios from 'axios';

export const header = [
  {
    title: 'Opção 1',
    children: [
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg', link: 'https://fengdie.alipay-eco.com/intro', top: '2px',
      },
    ],
  },
  {
    title: 'Opção 2',
    children: [
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: 'https://ant.design/docs/spec/values-cn',
      },
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/qkNZxQRDqvFJscXVDmKp.svg', link: 'https://ant.design/docs/spec/colors-cn',
      },
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/MrUQjZNOJhYJCSZZuJDr.svg', link: 'https://antv.alipay.com/zh-cn/vis/index.html',
      },
    ],
  },
  {
    title: 'Opção 3',
    children: [
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg', link: 'https://ant.design',
      },
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/crqUoMinEgjMeGGFAKzG.svg', link: 'https://antv.alipay.com',
      },
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/nEEwwpmNVihZimnBAtMf.svg', link: 'https://eggjs.org',
      },
    ],
  },
  {
    title: 'Opção 4',
    children: [
      {
        title: 'Título', desc: 'Subtítulo', img: 'https://gw.alipayobjects.com/zos/rmsportal/VsVqfjYxPTJaFbPcZqMb.svg', link: 'https://zhuanlan.zhihu.com/xtech',
      },
    ],
  },
];

export const banner = [
  {
    img: 'https://ae01.alicdn.com/kf/HTB1ZjJ0nrGYBuNjy0Foq6AiBFXaK/Foto-pano-de-fundo-rosa-textura-de-m-rmore-de-M-rmore-piso-textura-de-pedra.jpg',
    imgMobile: '',
    className: 'seeconf-wrap',
    children: [
      { children: '', className: 'seeconf-fst-name' },
      { children: 'Ânima', className: 'seeconf-title-1', tag: 'h1' },
      { children: 'Sinta-se em casa!', className: 'seeconf-cn-name-1' },
      {
        children: 'Sobre mim',
        className: 'banner-button',
        tag: 'button',
      },
      { children: '', className: 'seeconf-time' },
    ],
  },
  {
    img: 'https://ae01.alicdn.com/kf/HTB1ZjJ0nrGYBuNjy0Foq6AiBFXaK/Foto-pano-de-fundo-rosa-textura-de-m-rmore-de-M-rmore-piso-textura-de-pedra.jpg',
    imgMobile: '',
    className: 'seeconf-wrap',
    children: [
      { children: '', className: 'seeconf-en-name' },
      { children: 'Quem eu sou?', className: 'seeconf-title-2', tag: 'h1' },
      { children: 'Sou Psicóloga Licenciada pela Universidade Franciscana UFN - Santa Maria, RS e pós-graduada pelo Instituto Português de Psicologia - Lisboa, PT.Trabalho na área de clínica On-line, com foco na autoestima da mulher e o feminino. Durante minhas experiências profissionais, sempre visualizei o autoconhecimento como uma chave para abrir diversas portas. Hoje, vejo que o autoconhecimento leva à uma melhoria em praticamente todos os âmbitos da vida dos meus pacientes.Dou ênfase em inovar na psicologia e ir além do padrão de psicóloga clínica. Valorizo a ética e a saúde mental, humanizando os atendimentos.', className: 'seeconf-cn-name-2' },
      { children: '2021', className: 'seeconf-time' },
    ],
  },
];

function handleAppointmentModal() {
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Próximo',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    progressSteps: ['1', '2', '3', '4', '5'],
  }).queue([
    {
      title: 'Olá!',
      text: 'Digite seu nome',
    },
    {
      text: 'Agora o seu telefone (xx) xxxxxxxxx',
    },
    {
      text: 'O Email',
    },
    {
      title: 'Está quase...',
      text: 'Informe uma data (dd-mm-aaaa)',
    },
    {
      title: 'Assunto',
      text: 'O que deseja falar?',
    },
  ]).then((result) => {
    if (result.value) {
      // eslint-disable-next-line no-inner-declarations
      function reverseStr(str) {
        return str.split('-').reverse().join('-');
      }

      const answers = {
        client_name: result.value[0],
        phone: result.value[1],
        email: result.value[2],
        date: reverseStr(result.value[3]),
        subject: result.value[4],
      };

      axios.post('https://clinicaanima.com/api/appointment/', answers)
        .then(() => {
          Swal.fire({
          // eslint-disable-next-line camelcase
            title: `Atendimento Marcado ${answers.client_name}`,
            icon: 'success',
            html: `
              Bem vinda à Ânima!
              Se preciso, entrarei em contato no ${answers.phone}
            `,
            confirmButtonText: 'Obrigado!',
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            html: `
              Por favor, tente mais tarde.
              Ou entre em contato no 99142-0880.
            `,
            confirmButtonText: 'Ok!',
          });
        });
    }
  });
}

function handleEbook() {
  Swal.fire({
  // eslint-disable-next-line camelcase
    title: 'Psicologia e o feminino',
    html: `
      Faça o download do seu exemplar! 😍
    `,
    confirmButtonText: 'Eu quero!',
  }).then((res) => {
    if (res.value) {
      window.open('https://docdro.id/WajjdAP');
    }
  });
}

async function handleRedirectToYoutube() {
  const response = await fetch('https://clinicaanima.com/api/config/1/');
  const data = await response.json();
  const urlFromAPI = data.secondURL;
  window.open(urlFromAPI);
}

export const page1 = {
  title: 'Conteúdos e agendamento de consultas',
  children: [
    {
      title: 'E-book',
      content: 'Veja o meu e-book',
      src: 'https://cdn.iconscout.com/icon/free/png-256/ebook-1473378-1251457.png',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.1)',
      link: () => handleEbook(),
    },
    {
      title: 'Marque sua consulta',
      content: 'Veja a disponibilidade',
      src: 'https://images.vexels.com/media/users/3/149523/isolated/preview/fd623af923cde68bc9360810ed0d5724-calendar-date-3d-icon-by-vexels.png',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.1)',
      link: () => handleAppointmentModal(),
    },
    {
      title: 'Conteúdos',
      content: 'Veja aqui nossos conteúdos',
      src: 'https://www.freeiconspng.com/thumbs/youtube-icon/youtube-icon-7.png',
      color: 'red',
      shadowColor: 'rgba(183, 9, 9, 0.1)',
      link: () => handleRedirectToYoutube(),
    },
  ],
};

export const page4 = {
  title: 'Fale conosco',
};

export const footer = [

  {
    title: 'Encontre-nos',
    children: [
      { title: 'Opção 1', desc: '', link: '' },
      { title: 'Opção 2', desc: '', link: '' },
      { title: 'Opção 3', desc: '', link: '' },
      { title: 'Opção 4', desc: '', link: '' },
    ],
  },
];

// 图处预加载；
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  [
    'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
  ].concat(page4.children).forEach((src) => {
    const img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}
