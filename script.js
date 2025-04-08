const profiles = [
    { profilePic: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Alice", chat: "Hey there!", chatTime: "10:00 AM" },
    { profilePic: "https://images.unsplash.com/photo-1690447775481-58c65cce1215?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Bob", chat: "What's up?", chatTime: "10:05 AM" },
    { profilePic: "https://images.unsplash.com/photo-1626469028023-896eda77d814?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Charlie", chat: "How's it going?", chatTime: "10:10 AM" },
    { profilePic: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Diana", chat: "Lunch time!", chatTime: "10:15 AM" },
    { profilePic: "https://images.unsplash.com/photo-1626469215775-5bb781dcfd99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", username: "Ethan", chat: "See you soon.", chatTime: "10:20 AM" },
    { profilePic: "https://images.unsplash.com/photo-1634113755405-4c34d7abcbb7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Fiona", chat: "Good morning!", chatTime: "10:25 AM" },
    { profilePic: "https://images.unsplash.com/photo-1634113755405-4c34d7abcbb7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "George", chat: "Call me when free.", chatTime: "10:30 AM" },
    { profilePic: "https://images.unsplash.com/photo-1637849250817-5d692ae72a5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Hannah", chat: "Meeting now.", chatTime: "10:35 AM" },
    { profilePic: "https://images.unsplash.com/photo-1626469215775-5bb781dcfd99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Ian", chat: "On my way!", chatTime: "10:40 AM" },
    { profilePic: "https://images.unsplash.com/photo-1638948930528-44c8843f4518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", username: "Julia", chat: "Got it, thanks!", chatTime: "10:45 AM" }
];

let chats = document.querySelector('.chats')


function heroFunc() {
    let sum = " "

    profiles.forEach((user) => {
        sum += `<div class="chat">
                <div class="chat-in">
                    <img src=${user.profilePic} alt="">
                    <div class="chat-dets">
                        <h2>${user.username}</h2>
                        <h5>${user.chat}</h5>
                    </div>
                </div>
                    <div class="chat-time">${user.chatTime}</div>
                </div> `

        // console.log(sum)

    })
    chats.innerHTML = sum;

}
heroFunc()

let mode = document.querySelector('.mode')

localStorage.setItem('mode', 'light')

let usermode = localStorage.getItem('mode', 'light')

let main = document.querySelector('main')

mode.addEventListener('click', function () {

    let usermode = localStorage.getItem('mode')
    // console.log(usermode)

    if (usermode == 'light') {
        localStorage.setItem('mode', 'dark')
        main.classList.add('dark')
    } else if (usermode == 'dark') {
        localStorage.setItem('mode', 'light')
        main.classList.remove('dark')
    }
})
// localStorage.clear()
 

