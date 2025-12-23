"use client";
import { useState } from "react";
import { Problem } from "./common";

// Problem кодуудыг энд шууд оруулж өгсөн
const pythonCode1 = Problem.problem1;

const pythonCode2 = Problem.problem2;

const pythonCode3 = Problem.problem3;

export default function Home() {
  // Бодлого 1 - Савааны тэгш өнцөгт
  const [n, setN] = useState("");
  const [result, setResult] = useState<string | number | null>(null);

  // Бодлого 2 - Будаг квадрат
  const [numJars, setNumJars] = useState("");
  const [paintLiters, setPaintLiters] = useState("");
  const [maxSquares, setMaxSquares] = useState<number | null>(null);

  // Бодлого 3 - Спирал матриц
  const [spiralN, setSpiralN] = useState("");
  const [spiralX, setSpiralX] = useState("");
  const [spiralY, setSpiralY] = useState("");
  const [spiralResult, setSpiralResult] = useState<number | null>(null);

  // Бодлого 1 тооцоолох
  const handleCalculate1 = () => {
    const num = parseInt(n);

    if (isNaN(num) || num <= 0) {
      setResult("Зөв эерэг бүхэл тоо оруулна уу");
      return;
    }

    if (num % 2 === 1) {
      setResult("тэгш тоо оруул!!!");
      return;
    }

    const k = Math.floor(num / 2);
    let res;

    if (k % 2 === 1) {
      res = Math.floor((k - 1) / 2);
    } else {
      res = k / 2 - 1;
    }
    setResult(res);
  };

  // Бодлого 2 тооцоолох
  const handleCalculate2 = () => {
    const n = parseInt(numJars);
    if (isNaN(n) || n <= 0) {
      setMaxSquares(null);
      alert("Зөв эерэг бүхэл тоо оруулна уу");
      return;
    }

    const a = paintLiters.split(" ").map(Number);
    if (a.length !== n || a.some((x) => isNaN(x) || x <= 0)) {
      setMaxSquares(null);
      alert("Будгийн хэмжээг зөв оруулна уу");
      return;
    }

    let maxSquaresLocal = 0;

    for (let start = 0; start < n; start++) {
      const minPaint = Math.min(...a);
      let total = minPaint * n;
      const remaining = a.map((x) => x - minPaint);

      let pos = start;
      while (remaining[pos] > 0) {
        remaining[pos] -= 1;
        total += 1;
        pos = (pos + 1) % n;
      }

      if (total > maxSquaresLocal) maxSquaresLocal = total;
    }

    setMaxSquares(maxSquaresLocal);
  };
  // Бодлого 3 - Спирал матриц тооцоолох (O(1))
  const handleCalculate3 = () => {
    const n = parseInt(spiralN);
    const x = parseInt(spiralX);
    const y = parseInt(spiralY);

    if (isNaN(n) || isNaN(x) || isNaN(y)) {
      alert("Зөв тоо оруулна уу");
      return;
    }

    if (n < 3 || x < 0 || y < 0 || x >= n || y >= n) {
      alert("Утгууд хязгаарт багтаахгүй байна");
      return;
    }

    const layer = Math.min(x, y, n - 1 - x, n - 1 - y);

    const elementsB = n * n - (n - 2 * layer) * (n - 2 * layer);

    const layerSize = n - 2 * layer;
    const start = layer;
    const end = n - layer - 1;

    let position = 0;

    if (x === start && start <= y && y <= end) {
      position = y - start;
    } else if (y === end && start < x && x <= end) {
      position = layerSize - 1 + (x - start);
    } else if (x === end && start <= y && y < end) {
      position = 2 * (layerSize - 1) + (end - y);
    } else {
      position = 3 * (layerSize - 1) + (end - x);
    }

    const result = elementsB + position + 1;
    setSpiralResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Бодлого 1 */}
      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Бодлого 1: Савааны тэгш өнцөгт
        </h2>

        <div className="mb-4 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{pythonCode1}</pre>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Савааны нийт урт n оруулна уу:
            </label>
            <input
              className="border text-black placeholder-gray-400  border-gray-300 rounded px-4 py-2 w-48"
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              placeholder="Жишээ: 20"
            />
            <button
              onClick={handleCalculate1}
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            >
              Тооцоолох
            </button>
          </div>

          {result !== null && (
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-lg font-semibold text-green-800">
                Боломжит аргууд: {result}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Бодлого 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Бодлого 2: Будаг квадрат
        </h2>

        <div className="mb-4 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{pythonCode2}</pre>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Савны тоо n:</label>
            <input
              className="border border-gray-300 rounded px-4 py-2 w-48 text-black  placeholder-gray-400"
              type="number"
              value={numJars}
              onChange={(e) => setNumJars(e.target.value)}
              placeholder="Жишээ: 5"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Будгийн литрүүд a₁...aₙ (хооронд нь зай): Тэмдэг хооронд зай авна
              уу сүүлийн space байхгүй байх ёстой.
            </label>
            <input
              className="border border-gray-300 text-black placeholder-gray-400 rounded px-4 py-2 w-full max-w-md"
              type="text"
              value={paintLiters}
              onChange={(e) => setPaintLiters(e.target.value)}
              placeholder="Жишээ: 2 4 2 3 3"
            />
          </div>

          <button
            onClick={handleCalculate2}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          >
            Тооцоолох
          </button>

          {maxSquares !== null && (
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-lg font-semibold text-green-800">
                Хамгийн их будаж болох квадрат: {maxSquares}
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Бодлого 3 */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Бодлого 3: Спирал матриц O(1)
        </h2>

        <div className="mb-4 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{pythonCode3}</pre>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Матрицын хэмжээ n:
            </label>
            <input
              className="border text-black placeholder-gray-400  border-gray-300 rounded px-4 py-2 w-48"
              type="number"
              value={spiralN}
              onChange={(e) => setSpiralN(e.target.value)}
              placeholder="Жишээ: 3"
            />
          </div>

          <div className="flex gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Мөр x:</label>
              <input
                className="border text-black placeholder-gray-400  border-gray-300 rounded px-4 py-2 w-32"
                type="number"
                value={spiralX}
                onChange={(e) => setSpiralX(e.target.value)}
                placeholder="Жишээ: 2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Багана y:</label>
              <input
                className="border text-black placeholder-gray-400  border-gray-300 rounded px-4 py-2 w-32"
                type="number"
                value={spiralY}
                onChange={(e) => setSpiralY(e.target.value)}
                placeholder="Жишээ: 1"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate3}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
          >
            Тооцоолох
          </button>

          {spiralResult !== null && (
            <div className="bg-purple-50 border border-purple-200 rounded p-4">
              <p className="text-lg font-semibold text-purple-800">
                Спирал матриц [{spiralX}, {spiralY}] = {spiralResult}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ⚡ O(1) Time Complexity - Тогтмол хугацаанд тооцоолсон
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
