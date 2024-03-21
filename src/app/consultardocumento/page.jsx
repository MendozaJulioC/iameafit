"use client";
import Link from "next/link";
import Tabla from "../../components/Tablas/TableDonde";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Datepicker,
  Textarea,
  TextInput,
  ToggleSwitch,
  Avatar,
} from "flowbite-react";

import Select from "react-select";
import { useState } from "react";

// const options = [
//   { value: '1', label: 'Tarjeta de Identidad' },
//   { value: '2', label: 'Cédula de ciudadanía' },
//   { value: '3', label: 'Registro Civil' },
//   { value: '4', label: 'Cédula de Extranjería' }
// ]
// const sexo = [
//   { value: 'm', label: 'Masculino' },
//   { value: 'f', label: 'Femenino' }

// ]
// import TableDisciplina from '../../../components/Tables/TableDisciplina'

export default function Page() {
  const [switch2, setSwitch2] = useState(true);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("idCitizen", idCitizen);
    formData.append("name", name);

    // Realizar la solicitud POST aquí, por ejemplo:
    fetch("http://localhost:8090/v1/documents/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="p-2 sm:ml-60">
      <div className=" bg-gray px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
        <div className="p-2 border-2 border-dashed rounded-lg dark:border-red-500 mt-2">
          <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
            <h1 className="font-bold text-5xl text-center">
              {" "}
              Colsultar sus documentos al sistema
            </h1>
            <div className="text-gray-800">
              <div className="">
                <input
                  type="hidden"
                  id="idCitizen"
                  name="idCitizen"
                  value={1039466388}
                />
                <input
                  type="hidden"
                  id="name"
                  name="name"
                  value={"David Roldan"}
                />
                <Tabla />
              </div>
            </div>

            {/* <div className=" grid grid-cols-4 gap-2  mt-4 ">
              <button
                onClick={handleFileSelect}
                className="mt-4 sm:px-18  col-start-2 col-span-2 flex justify-center rounded-md bg-gray-400  px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-file-earmark-plus-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                </svg>
                Subir Documentos
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
