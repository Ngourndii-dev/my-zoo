export async function fetchAnimals() {
    const response = await fetch("http://localhost:8080/animals");
    return response.json();
  }
  
export async function fetchReviews() {
    const response = await fetch("http://localhost:8080/reviews");
    return response.json();
  }