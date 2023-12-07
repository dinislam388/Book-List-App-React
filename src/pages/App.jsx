import { useState } from "react";
import BookRow from "../Components/BookRow";

export const App = () => {
	// main array of objects state || books state || books array of objects

	const [books, setBooks] = useState([])

	// input field states

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  console.log(isbn);

  // clear input 

    const clearInput = () => {
      setTitle('')
      setIsbn('')
      setAuthor('')
      setPubYear('')
    }

	// form submit event
	const handleSubmit = (e) => {
		e.preventDefault();
		
		// Create book object 
		const book = {
			title,
			author,
			isbn,
			pubYear,
		  };
		// setBooks(book)
		setBooks([...books, book])
		clearInput()
	}



	// delete book from LS

	const deleteBooks = (isbn) => {
		const filteredBooks = books.filter(book => book.isbn !== isbn)
		setBooks(filteredBooks)
	}

	// saving data to local storage
	
	// useEffect(() => {
	// 	localStorage.setItem('books', JSON.stringify(books))
	// }, [books]);

	return (
		<div className="wrapper">
			<h1>BookList App</h1>
			<p>Add and view your books using local storage</p>
			<div className="main">
				<div className="form-container">
					<form onSubmit={handleSubmit}
						className="form-group">
						<label>Title</label>
						<input
							type="text"
							value={title}
              				onChange={(e) => setTitle(e.target.value)}
							className="form-control"
             				required
						></input>
						<br></br>

						<label>Author</label>
						<input
							type="text"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							className="form-control"
							required
						></input>
						<br></br>

						<label>ISBN#</label>
						<input
							type="text"
							value={isbn}
							onChange={(e) => setIsbn(e.target.value)}
							className="form-control"
							required
						></input>
						<br></br>

            			<label>Publisher year</label>
						<input
							type="text"
							value={pubYear}
							onChange={(e) => setPubYear(e.target.value)}
							className="form-control"
							required
						></input>
						<br></br>

						<button
							type="submit"
							className="btn btn-success btn-md">
							ADD
						</button>
					</form>
				</div>

				<div className="view-container">
						<>
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>ISBN#</th>
											<th>Title</th>
											<th>Author</th>
                      						<th>Publish year</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										{
											books.map(books => <BookRow 
												key={books.isbn}
												book={books} 
												deleteBooks = {deleteBooks}
												/>)
										}
									</tbody>
								</table>
							</div>
							<button className="btn btn-danger btn-md" onClick={() => setBooks([])}>Remove All</button>
							
						</>	
				</div>
			</div>
		</div>
	);
};

export default App;
