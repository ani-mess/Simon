
// // Storing data in local storage
// // localStorage.setItem('username','Rajshwari');
// // localStorage.setItem('password','123456789');
// // localStorage.setItem('role','Student');
// const user={
//     username:'Rajeshwari',
//     password:'123456789',
//     role:'Student'
// };
// localStorage.setItem('user',JSON.stringify(user));

// // retriving the data
// const username=localStorage.getItem('username');
// console.log(user.username);
// const password=localStorage.getItem('password');
// console.log(password);

// // Removing object / local elements
// // localStorage.removeItem('username');
// localStorage.removeItem('password');
// localStorage.clear();



document.addEventListener('DOMContentLoaded',()=>{
    // load preferences when the page loads
    loadPreferences();
});

function savePreferences(){
    const theme=document.getElementById('theme').value;
    const fontsize=document.getElementById('fontSize').value;

    localStorage.setItem('theme',theme);
    localStorage.setItem('fontSize',fontsize);

    alert('Preferences saved!');
    applyPreferences();
}

function loadPreferences(){
    const theme=localStorage.getItem('theme');
    const fontSize=localStorage.getItem('fontSize');

    

    if(theme){
        document.getElementById('theme').value=theme;
    }
    if(fontSize){
        document.getElementById('fontSize').value=fontSize;
    }
    applyPreferences();
}

function applyPreferences()
{
    const theme=localStorage.getItem('theme');
    const fontSize=localStorage.getItem('fontSize');

    if(theme)
        {
            document.body.className=theme;

        }
    if(fontSize)
        {
            document.body.style.fontSize="28px";
        }
}