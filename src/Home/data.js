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

const aboutMeText = 'Sou Psicóloga Licenciada pela Universidade Franciscana UFN - Santa Maria, RS e pós-graduada pelo Instituto Português de Psicologia - Lisboa, PT.Trabalho na área de clínica On-line, com foco na autoestima da mulher e o feminino. Durante minhas experiências profissionais, sempre visualizei o autoconhecimento como uma chave para abrir diversas portas. Hoje, vejo que o autoconhecimento leva à uma melhoria em praticamente todos os âmbitos da vida dos meus pacientes.Dou ênfase em inovar na psicologia e ir além do padrão de psicóloga clínica. Valorizo a ética e a saúde mental, humanizando os atendimentos.';

export const banner = [
  {
    img: 'https://ae01.alicdn.com/kf/HTB1ZjJ0nrGYBuNjy0Foq6AiBFXaK/Foto-pano-de-fundo-rosa-textura-de-m-rmore-de-M-rmore-piso-textura-de-pedra.jpg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: '', className: 'seeconf-fst-name' },
      { children: 'Ânima', className: 'seeconf-title', tag: 'h1' },
      { children: 'Sinta-se em casa!', className: 'seeconf-cn-name' },
      {
        children: 'Sobre mim',
        className: 'banner-button',
        tag: 'button',
        link: 'https://seeconf.alipay.com/',
      },
      { children: '', className: 'seeconf-time' },
    ],
  },
  {
    img: 'https://ae01.alicdn.com/kf/HTB1ZjJ0nrGYBuNjy0Foq6AiBFXaK/Foto-pano-de-fundo-rosa-textura-de-m-rmore-de-M-rmore-piso-textura-de-pedra.jpg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: '', className: 'seeconf-en-name' },
      { children: 'Quem eu sou?', className: 'seeconf-title', tag: 'h1' },
      { children: aboutMeText, className: 'seeconf-cn-name' },
      { children: '2020', className: 'seeconf-time' },
    ],
  },
];
export const page1 = {
  title: 'Seção Funcional',
  children: [
    {
      title: 'E-book',
      content: 'Veja o meu e-book',
      src: 'https://cdn.iconscout.com/icon/free/png-256/ebook-1473378-1251457.png',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.15)',
      link: () => console.log('teste desde e-book'),
    },
    {
      title: 'Marque sua consulta',
      content: 'Veja a disponibilidade',
      src: 'https://images.vexels.com/media/users/3/149523/isolated/preview/fd623af923cde68bc9360810ed0d5724-calendar-date-3d-icon-by-vexels.png',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.15)',
      link: () => console.log('teste desde consulta'),
    },
    {
      title: 'Conteúdos',
      content: 'Veja aqui nossos conteúdos',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.15)',
      link: () => console.log('teste desde conteúdos'),
    },
  ],
};

export const page3 = {
  title: 'Seção vídeo',
  children: [
    {
      img: 'https://pt.med-mash.ru/tmp/images/4.jpg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
  ],
};

export const page4 = {
  title: 'Fale conosco',
  children: [
    'https://gw.alipayobjects.com/zos/rmsportal/qImQXNUdQgqAKpPgzxyK.svg', // 阿里巴巴
    'https://gw.alipayobjects.com/zos/rmsportal/LqRoouplkwgeOVjFBIRp.svg', // 蚂蚁金服
    'https://gw.alipayobjects.com/zos/rmsportal/TLCyoAagnCGXUlbsMTWq.svg', // 人民网
    'https://gw.alipayobjects.com/zos/rmsportal/HmCGMKcJQMwfPLNCIhOH.svg', // cisco
    'https://gw.alipayobjects.com/zos/rmsportal/aqldfFDDqRVFRxqLUZOk.svg', // GrowingIO
    'https://gw.alipayobjects.com/zos/rmsportal/rqNeEFCGFuwiDKHaVaPp.svg', // 饿了么
    'https://gw.alipayobjects.com/zos/rmsportal/FdborlfwBxkWIqKbgRtq.svg', // 滴滴出行
    'https://gw.alipayobjects.com/zos/rmsportal/coPmiBkAGVTuTNFVRUcg.png', // 飞凡网
  ],
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
