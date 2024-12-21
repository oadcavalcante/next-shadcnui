import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Bem-vindo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Essa é uma página de exemplo usando ShadCN/UI.</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default" className="mr-2">
            Ação 1
          </Button>
          <Button variant="outline" className="mr-2">
            Ação 2
          </Button>
          <Button variant="destructive" className="mr-2">
            Ação 3
          </Button>
          <Button variant="ghost" className="mr-2">
            Ação 4
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
