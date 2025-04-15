export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export async function fetchUsers(): Promise<User[]> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener datos:", error);
      return [];
    }
  }
  