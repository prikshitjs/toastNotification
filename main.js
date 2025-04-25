let shownotif = document.createElement('div');
shownotif.className = 'showNotification';
document.body.appendChild(shownotif);

function success(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('success');
	notif.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}
function error(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('alert');
	notif.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}
function invalid(text) {
	let notif = document.createElement('div');
	notif.classList.add('notif');
	notif.classList.add('invalid');
	notif.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${text}`;
	shownotif.appendChild(notif);
	setTimeout(()=>{
		notif.remove();
	},8000)
}