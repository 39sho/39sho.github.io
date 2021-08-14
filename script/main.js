const time_element = document.querySelector("#last_modified");
const last_modified = new Date(document.lastModified);
time_element.datetime = last_modified.toISOString();
time_element.textContent = new Intl.DateTimeFormat().format(last_modified);