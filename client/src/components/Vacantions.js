import React from 'react';

function Vacantions(props) {
  return (
    <div className='vacantion'>
    <form onSubmit={vacansionHandler} method='POST'>
        <h3>Registration</h3>        
        <input name='organization' type="text" placeholder='введите организацию'/>
        <input name='name' type="text" placeholder='введите вакансию'/>
        <input name='date' type="text" placeholder='введите дату'/>
        <input name='' type="radio" placeholder='введите дату'/>
        <input name='' type="text" placeholder='введите описание'/>
        <input onChange={emailRegHandler} type="text" placeholder='enter email'/>
        <input onChange={passwordRegHandler} type="password" placeholder='enter password'/>

        <button>Добавить Вакансию</button>
    </form>
</div>
  );
}

export default Vacantions;
