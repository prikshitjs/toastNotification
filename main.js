let shownotif = document.createElement('div');
shownotif.className = 'showNotification';
document.body.appendChild(shownotif);

function success(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('success');
	notif.innerHTML = `<span>&#10004;</span> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}
function error(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('alert');
	notif.innerHTML = `<span>&#x26A0;</span> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}
function invalid(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('invalid');
	notif.innerHTML = `<span>&#x26CC;</span> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}
