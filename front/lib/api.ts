export async function fetchAnimals() {
    const response = await fetch("http://localhost:8080/animals/client");
    return response.json();
  }
export async function fetchReviews() {
    const response = await fetch("http://localhost:8080/reviews/client");
    return response.json();
}
export async function fetchEvent() {
    const response = await fetch("http://localhost:8080/events/client");
    return response.json();
}
export async function fetchAnimalsTemplate() {
    const response = await fetch("http://localhost:8080/animal-templates");
    return response.json();
} 