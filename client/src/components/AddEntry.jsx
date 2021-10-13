import React from 'react';

class AddEntry extends React.Component {

  constructor(props) {
    super(props);
    this.submitNewEntry = this.submitNewEntry.bind(this)
  }

   submitNewEntry(e) {
     e.preventDefault();
    console.log('submitted yall', e.target)
  }

  render() {
    return(
      <div id='formModalContainer'>
        <div id='formModalContent'>
        <form id='addEntryForm' onSubmit={this.submitNewEntry}>
          <input className='addEntryForm' id='newDate' type='date' /><br />
          <input className='addEntryForm' id='entryTitle' type='text' placeholder='add your title here' /><br />
          <textarea className='addEntryForm' id='entryBody' placeholder='add your body here' form='addNewEntry' /><br />
          <input className='addEntryForm' id='submitEntry' type='submit' />
        </form>
        </div>
      </div>
    )
  }

}

export default AddEntry;