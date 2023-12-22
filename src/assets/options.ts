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

export const projects = [
  {
    name: 'DevBook',
    about: 'Team Project (2인)',
    period: '23.11.29 ~ 23.12',
    people: '🧑🏻‍💻 프론트엔드 2명',
    stack: ['Next.js', 'TypeScript', 'Recoil', 'Tailwind CSS'],
    link: [
      { site: 'GitHub', url: 'https://github.com/devbookorg/devbook' },
      { site: 'DevBook Link', url: 'https://devbook-omega.vercel.app' },
    ],
    image:
      'https://www.notion.so/52f3e9e5a8eb44a0af4dbf7de1f70f02?pvs=4#4c238aa690764b4f8c67967eb39e1bf0',
    detail: {
      title: '프론트엔드 기술면접 질문 아카이브',
      description:
        '프론트엔드 관련 질문 답변을 작성하고, 관리자의 승인 하에 게시됩니다.',
    },
    works: {
      work: [
        {
          main: 'Firebase를 사용하여 데이터 구조 생성 ',
          sub: [
            '댓글을 작성하기 위하여 Comments collection을 생성하고 CRUD 로직을 구현하였습니다.',
            '답글 기능을 구현하기 위해 CommentsList 컴포넌트를 중첩하여 사용해 같은 ui를 재사용할 수 있었습니다. ',
            '댓글의 reply배열에 답글 id를 저장하고, 해당 id로 데이터를 조회해 해당 답글 데이터를 불러옵니다. ',
          ],
        },
        {
          main: 'usePagination, useModal 등의 커스텀 훅과 재사용 컴포넌트 사용으로 효율적인 코드 작성 ',
          sub: [
            '모달 컴포넌트를 전역으로 관리하여 재사용이 쉽고, 편리하게 코드를 작성할 수 있습니다.',
            'local storage를 활용하여 dark mode의 상태를 저장하고, data 속성을 이용해 테마를 변경합니다.',
          ],
        },
        {
          main: 'Framer를 활용해 디자인 시안을 제작하고 이를 바탕으로 Tailwind CSS를 활용해 UI 구현',
          sub: [
            'Tailwind CSS의 theme으로 주로 쓰이는 색상과 글씨 크기 등을 지정하여 작성하는데 어려움이 없도록 했습니다.',
            '재사용 컴포넌트인 Button의 타입을 지정하고 해당 타입을 사용해 스타일을 설정하여 효율적으로 코드를 작성했습니다.',
          ],
        },
        { main: 'PWA로 배포하였습니다.' },
        {
          main: 'Favicon과 Open Graph image등을 제작하고 프로젝트에 적용했습니다. ',
        },
        { main: 'Exclude 등을 활용하여 타입을 적절하고 알맞게 사용했습니다. ' },
      ],
    },
  },
  {
    name: 'Blind',
    about: 'Team Project (3인)',
    period: '23.08.08 ~ 23.09',
    people: '🧑🏻‍💻 프론트엔드 2명 / 백엔드 1명',
    stack: ['React', 'TypeScript', 'Recoil', 'Tanstack Query', 'Tailwind CSS'],
    link: [
      { site: 'GitHub', url: 'https://github.com/Blind-Dating' },
      { site: 'Blind Link', url: 'https://fe-zeta.vercel.app/' },
    ],
    image:
      'https://github.com/snakechickensoup/portfolio/blob/main/src/assets/images/blind.png?raw=true',
    detail: {
      title: `'블라인드' 데이팅 서비스`,
      description:
        '상대방과 서로 Like 상태가 되었을 시 채팅이 생성되어 대화를 나눌 수 있습니다.',
      user: 'ID : asdasdasd / PW : asdasdasd',
    },
    works: {
      title: 'Websocket을 사용한 실시간 채팅 구현',
      work: [
        {
          main: '채팅 목록과 채팅방을 소켓을 통해 실시간으로 구독하여 채팅 업데이트 (Sock.js, Stomp.js 사용)',
          sub: [
            '채팅 목록을 실시간으로 구독하고 있기에 채팅방 생성 / 채팅 입력 시 목록과 채팅창이 즉시 업데이트 됩니다.',
            '때문에 소켓이 중첩되어 채팅 목록과 채팅창을 이동할 때마다 값이 중복되는 이슈가 있었으나 컴포넌트가 unmount될 시 소켓을 close해줌으로써 해결할 수 있었습니다.',
            '백엔드와의 지속적인 소통으로, 소켓의 주소와 상태를 확인하여 cors 이슈를 해결하였습니다. ',
          ],
        },
        {
          main: 'useInfiniteQuery Hook을 사용하여 무한 스크롤 구현',
          sub: [
            '채팅이 업데이트 되거나 상단으로 스크롤 하는 등의 경우에 따라 스크롤의 위치가 변경되어야하기에 recoil로 상태를 저장하고, Intersection Observer API를 활용해 스크롤의 높이를 조절하였습니다.',
            'useInfiniteQuery hook을 사용하여 이전 데이터를 쉽게 불러올 수 있도록 하였습니다.',
          ],
        },
        { main: 'API 요청을 통한 유저의 정보 수정 ' },
      ],
    },
  },
  {
    name: 'Bryta',
    about: 'Team Project (4인)',
    period: '21.10.18 ~ 21.11 (4 weeks)',
    people: '🧑🏻‍💻 프론트 2 / 백 1 / 풀스택 2',
    stack: ['JavaScript', 'React', 'CSS', 'Redux Toolkit'],
    link: [
      {
        site: 'GitHub',
        url: 'https://github.com/codestates/bryta',
      },
      {
        site: 'Wiki',
        url: 'https://github.com/codestates/Bryta/wiki',
      },
      {
        site: 'Notion',
        url: 'https://www.notion.so/ca2183c6199e4830ac348ee5976ea017',
      },
    ],
    image:
      'https://github.com/snakechickensoup/portfolio/blob/main/src/assets/images/bryta.png?raw=true',
    detail: {
      title: `'필모깨기'를 도와주는 서비스`,
      description:
        '선호하는 배우와 영화를 like 하고 한 페이지에서 관리할 수 있습니다.',
    },
    works: {
      work: [
        {
          main: '프로젝트 아이디어 제공 및 기획 참여',
          sub: [
            '와이어프레임, 플로우 차트, 로고 제작',
            'API문서, dummy data 제작',
          ],
        },
        {
          main: 'API요청을 통한 CRUD 구현',
          sub: ['배우 / 영화 좋아요 기능', '마이 페이지 정보 수정'],
        },
        { main: '로그인 / 로그아웃 / 회원가입 기능 구현 ' },
      ],
    },
  },
];
