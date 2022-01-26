import React from 'react'


const AddFriend = () => {
    return (<div>
        <h2>ADD FRIEND</h2>
        <div>
            <label htmlFor='username'>Username :</label>
            <input type='text' id='username' />
        </div>
        <div>
            <label htmlFor='age'>Age :</label>
            <input type='text' id='age' />
        </div>
        <div>
            <label htmlFor='email'>FRIEND EMAIL</label>
            <input type='text' id='email' />
        </div>
        <div>
            <button>SUBMIT</button>
        </div>
    </div>
    )
}


export default AddFriend;