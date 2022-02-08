console.log('I am from summary file');
const blogs = document.getElementsByTagName('p');
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const harun = document.getElementById('special-blog');
// harun.innerText = 'new harun';
harun.innerHTML = `
    <h4>Spacial inner html</h4>
    <div>
        <ul>
            <li>Kdfmm df  mvkvm vsdk</li>
            <li>Kdfmm df  mvkvm vsdk</li>
            <li>Kdfmm df  mvkvm vsdk</li>
        </ul>
    </div>
`

const friends = document.getElementById('friends');
console.log(friends);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);