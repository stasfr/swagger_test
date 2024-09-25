// Типизация данных, возвращаемых API
interface Pet {
  id: number;
  name: string;
  status: string;
  category?: {
    id: number;
    name: string;
  };
  photoUrls: string[];
  tags?: {
    id: number;
    name: string;
  }[];
}

// Функция для выполнения GET-запроса
async function fetchPetsByStatus(status: string): Promise<Pet[]> {
  const response = await fetch(
    `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  // Парсинг JSON-ответа
  const data: Pet[] = await response.json();
  return data;
}

// Вызов функции и вывод данных в консоль
fetchPetsByStatus("available")
  .then((pets) => {
    console.log("Полученные питомцы:", pets);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
