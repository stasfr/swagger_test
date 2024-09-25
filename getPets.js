var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функция для выполнения GET-запроса
function fetchPetsByStatus(status) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        // Парсинг JSON-ответа
        const data = yield response.json();
        return data;
    });
}
// Вызов функции и вывод данных в консоль
fetchPetsByStatus("available")
    .then((pets) => {
    console.log("Полученные питомцы:", pets);
})
    .catch((error) => {
    console.error("Ошибка:", error);
});
