export const tags = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SCSS',
  'React',
  'Next.js',
  'Recoil',
  'Tanstack Query',
  'Redux Toolkit',
  'Tailwind CSS',
  'Styled Components',
];

export const categories = ['About', 'Works', 'Projects'];

export const works = [
  {
    company: '제론테크',
    about: '인공지능 솔루션 전문 기업',
    role: 'R&D 연구원 - 프론트엔드 개발',
    period: '2022.05 ~ 2023.05',
    work: [
      {
        title: 'Zaant (Annotation Tool) 개발',
        stack: ['React', 'TypeScript', 'SCSS', 'Antd', 'Redux'],
        main: 'Open source CVAT을 기반으로 하여, 커스텀 퍼블리싱 및 추가 기능 구현',
        sub: [
          '기존 CVAT의 함수형과 클래스형이 혼재되어있던 컴포넌트를 함수형으로 리팩토링하고 적절하게 컴포넌트를 분배하여 가독성을 향상시켰습니다.',
          '디자이너와 협업하여 ui를 재구성하였으며 불필요한 ant design을 제거하여 유지보수가 수월하도록 하였습니다.',
          'Context API를 활용하여 재사용 컴포넌트를 구현하였습니다.',
          'annotation image Canvas 에 svg를 활용하여 페이지에 따라 cursor를 변경하였으며 이벤트가 발생된 좌표값과 유저의 권한에 따라 리뷰를 생성할 수 있도록 하였습니다.',
        ],
      },
      {
        title: 'AI Monitoring System 개발',
        stack: ['Next.js', 'JavaScript', 'PrimeFlex', 'Chart.js', 'Next-auth'],
        main: '스트림 차트를 이용하여 데이터 실시간 렌더링',
        sub: [
          '실시간으로 데이터를 받아와 Chart.js의 scatter chart를 이용해 값의 변화를 한 눈에 볼 수 있도록 했습니다.',
          '데이터 상태를 indexedDB로 저장하여 차트가 refresh될 때 서버에 요청하는 횟수를 줄였습니다.',
          '모니터링 시 차트데이터가 쌓여 out of memory가 되던 이슈를 차트 데이터의 길이에 따라 기존 값을 제거해줌으로써 해결하였습니다.',
        ],
      },
      {
        main: 'Next-auth의 keycloak provider를 사용하여 로그인 인증 구현',
      },
    ],
  },
  {
    company: '대일섬유',
    about: '남성 셔츠 기반 화학섬유 제조업',
    role: '영업 지원',
    period: '2018.10 ~ 2021.03',
    work: [
      {
        sub: [
          '원단 재고와 시험분석 성적서 관리',
          '팀원과의 커뮤니케이션에 대해 배울 수 있었습니다. ',
        ],
      },
    ],
  },
];

export const githubURL = 'https://github.com/snakechickensoup';
