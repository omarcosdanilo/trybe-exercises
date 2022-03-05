import './App.css';
import './css/personal-fieldset.css'
import './css/last-job-fieldset.css'
import Form from './first-fieldset/Form'
import JobForm from './second-fieldset/JobForm';

function App() {
  return (
    <>
      <fieldset className='personal-fieldset'>
        <Form />
      </fieldset>
      <fieldset className='last-job-fieldset'>
        <JobForm />
      </fieldset>
    </>
  );
}

export default App;
