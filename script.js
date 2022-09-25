
const booklist= document.getElementById('books')
// to fetch data from api
async function getbook(){
	const res = await fetch(`https://www.anapioficeandfire.com/api/books`);
	const data = await res.json();
	return data;
}
// to get the particular data from the api
async function showbook(){
	const bookss = await getbook();
	console.log(bookss)
	bookss.forEach(ele => {
		const tr = document.createElement('tr')
		tr.innerHTML=
		`<tr>
		<td>${ele.name}</td>
		<td>${ele.authors}</td>
		<td>${ele.isbn}</td>
		<td>${ele.publisher}</td>
		<td>${ele.released}</td>
		<td id="char">${ele.characters.slice(0,5)}</td>
	</tr>
	`
	booklist.appendChild(tr)
		
	});
}
showbook();

