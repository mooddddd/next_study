import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPate = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPate;
