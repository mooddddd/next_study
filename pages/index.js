import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'a first meet',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Prague_from_Powder_Tower_01.jpg/2560px-Prague_from_Powder_Tower_01.jpg',
    address: '서울특별시',
    description: '여기서 만나용',
  },
  {
    id: 'm2',
    title: 'a second meet',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Prague_from_Powder_Tower_01.jpg/2560px-Prague_from_Powder_Tower_01.jpg',
    address: '경기도',
    description: '저기서 만나용~~~~',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
