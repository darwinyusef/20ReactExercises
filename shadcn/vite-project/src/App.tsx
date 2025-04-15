import './App.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <div className="min-h-screen bg-yellow-500 p-10 rounded-lg">
      <h1 className="text-9xl font-extrabold text-center text-white">Bienvenidos a mi website</h1>
      <div className="flex justify-center">
        <Button className="mt-6" variant="outline" size="lg">
          Enviado
        </Button>
      </div>

      <div className="flex justify-around gap-1 mt-10">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="bg-white/20 backdrop-blur-md border-white border-2 shadow-xl">
            <CardHeader className="flex flex-col items-center justify-center">
              <img
                src="https://picsum.photos/300/300"
                alt="Imagen"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              <div className='items-center'>
                <CardTitle className="text-white mt-4">Card Title {item}</CardTitle>
                <CardDescription className="text-white/80">Card Description</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white">Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-white/70">Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App
