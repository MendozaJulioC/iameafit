'use client'
import Link from "next/link";
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
  Avatar
} from 'flowbite-react';

import Select from 'react-select'
import { useState } from 'react';

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
    formData.append('file', file);
    formData.append('idCitizen', idCitizen);
    formData.append('name', name);


    // Realizar la solicitud POST aquí, por ejemplo:
    fetch('http://localhost:8090/v1/documents/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };


    return (
      <div className="p-2 sm:ml-60">
        <div className=" bg-gray px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
          <div className="p-2 border-2 border-dashed rounded-lg dark:border-red-500 mt-2">
            <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
              <h1 className="font-bold text-5xl text-center">
                {" "}
                Cargue sus documentos al sistema
              </h1>
              <div className=" grid grid-cols-4 gap-2 ">
                <div className="col-start-2 col-span-2">
                  <div className="mb-5">
                    <div className="mt-8">
                      <label
                        for="foto"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Cédula
                      </label>
                    </div>
                    <FileInput
                      id=""
                      onChange={handleFileSelect}
                      helperText="SVG, PNG, JPG, PDF"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  {/* <input type="file" onChange={handleFileSelect} /> */}
                  <input type="hidden" id="idCitizen" name="idCitizen" value={1039466388}/>
                  <input type="hidden" id="name" name="name" value={'David Roldan'}/>

                </div>

                {/* <div className="col-start-2 col-span-2">
                  <div className="mb-5">
                    <div className="mt-8">
                    <label
                        for="foto"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Certificado estudio
                      </label>
      
                    </div>
                    <FileInput
                      id="file-upload-helper-text"
                      helperText="SVG, PNG, JPG "
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div> */}
              </div>

              <div className=" grid grid-cols-4 gap-2">
                {/* <div className="mb-5">
                  <label
                    for="nom1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Primer Nombre
                  </label>
                  <input
                    type="text"
                    id="nom1"
                    name="nom1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Juanito"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="nom2"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Segundo Nombre
                  </label>
                  <input
                    type="text"
                    id="nom2"
                    name="nom2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pedro"
                  />
                </div> */}
                {/* <div className="mb-5">
                  <label
                    for="apellido1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Primer Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Perez"
                    required
                  />
                </div> */}

                {/* <div className="mb-5">
                  <label
                    for="apellido2"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Segundo Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="García"
                  />
                </div> */}
              </div>
              
              <div className=" grid grid-cols-4 gap-2">
                {/* <div className="mb-5">
                  <label
                    for="nom1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tipo de documento
                  </label>
                  <Select options={options} />
                </div>
                <div className="mb-5">
                  <label
                    for="nom2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Documento
                  </label>
                  <input
                    type="text"
                    id="apellido2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="García"
                  />
                </div> */}



                {/* <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sexo
                  </label>
                  <Select options={sexo} />
                </div> */}
                {/* <div className="mb-5">
                  <label
                    for="apellido2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fecha de nacimiento
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="date"
                    name="bday"
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </div> */}
              </div>



              {/* <div className="mb-5">
                <label
                  for="nom2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  id="apellido2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="García"
                />
              </div> */}
              {/* 
              <div className=" grid grid-cols-4 gap-2">
                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Departamento
                  </label>
                  <Select options={sexo} />
                </div>
                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ciudad
                  </label>
                  <Select options={sexo} />
                </div>
                <div className="mb-5">
                  <label
                    for="apellido1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Barrio
                  </label>
                  <input
                    type="text"
                    id="apellido1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Perez"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="apellido1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Club
                  </label>
                  <input
                    type="text"
                    id="apellido1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Perez"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Disciplina
                  </label>
                  <Select options={sexo} />
                </div>

                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Posicion 1
                  </label>
                  <Select options={sexo} />
                </div>

                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Posicion 2
                  </label>
                  <Select options={sexo} />
                </div>

                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Posicion 3
                  </label>
                  <Select options={sexo} />
                </div>

                <div className="mb-5">
                  <label
                    for="apellido1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Categoría
                  </label>
                  <input
                    type="text"
                    id="apellido1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Perez"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="apellido1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Telefono/Celular
                  </label>
                  <input
                    type="number"
                    id="tele"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="300"
                    required
                  />
                </div>
                <div className="mb-5 col-span-2">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="oscar@gmail.com"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="sexo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Posee Acudiente?
                  </label>
                  <Select options={sexo} />
                </div>
              </div> */}
              {/* 
              <div>
                <form action="">
                  <div className=" grid grid-cols-4 gap-2 p-4 border-2 border-dashed border-red-400 rounded-lg dark:border-red-400 mt-2">
                    <div className="mb-5 col-span-4 ml-2">
                      <label
                        for="nom1"
                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                      >
                        Acudiente
                      </label>
                    </div>

                    <div className="mb-5">
                      <label
                        for="nom1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Primer Nombre Acudiente
                      </label>
                      <input
                        type="text"
                        id="nom1"
                        name="nom1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Juanito"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="nom2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Segundo Nombre Acudiente
                      </label>
                      <input
                        type="text"
                        id="nom2"
                        name="nom2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pedro"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="apellido1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Primer Apellido Acudiente
                      </label>
                      <input
                        type="text"
                        id="apellido1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Perez"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        for="apellido2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Segundo Apellido Acudiente
                      </label>
                      <input
                        type="text"
                        id="apellido2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="García"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        for="nom1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tipo de documento
                      </label>
                      <Select options={options} />
                    </div>
                    <div className="mb-5">
                      <label
                        for="nom2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Documento
                      </label>
                      <input
                        type="text"
                        id="apellido2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="García"
                      />
                    </div>

                    <div className="mb-5 col-span-2">
                      <label
                        for="nom2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="apellido2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="García"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        for="sexo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Departamento
                      </label>
                      <Select options={sexo} />
                    </div>
                    <div className="mb-5">
                      <label
                        for="sexo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Ciudad
                      </label>
                      <Select options={sexo} />
                    </div>
                    <div className="mb-5 col-span-2">
                      <label
                        for="apellido1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Barrio
                      </label>
                      <input
                        type="text"
                        id="apellido1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Perez"
                        required
                      />
                    </div>

                    <div className="mb-5 col-span-4">
                      <label
                        for="nom2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="apellido2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="García"
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        for="apellido1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Telefono/Celular
                      </label>
                      <input
                        type="number"
                        id="tele"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="300"
                        required
                      />
                    </div>
                    <div className="mb-5 col-span-3">
                      <label
                        for="apellido1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Ocupación
                      </label>
                      <input
                        type="number"
                        id="tele"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="300"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div> */}
{/* 
              <div className="mt-4 ">
                <p className="text-justify font-bold text-gray-500">
                  AUTORIZACION PARA EL TRATAMIENTO Y USO DE DATOS PERSONALES:{" "}
                </p>
                <p className="text-justify mt-2 text-gray-500">
                  De conformidad con lo previsto en la Ley 1581 de 2012 “por la
                  cual se dictan las disposiciones generales para la protección
                  de datos personales” y el Decreto 1377 de 2013, con la firma
                  de este documento manifiesto que otorgo mi autorización
                  expresa y clara para que el IAM Sistemas eafit Up, pueda hacer
                  tratamiento y uso de mis datos personales, los cuales estarán
                  reportados en la base de datos de la que es responsable dicha
                  organización y que han sido recolectados en las relaciones
                  contractuales que ésta realiza en desarrollo de su objeto. De
                  acuerdo a la normatividad citada el IAM Sistemas distribuidos
                  queda autorizado de manera expresa e inequívoca para mantener
                  y manejar la información suministrada, solo para aquellas
                  finalidades para las que se encuentra facultado y respetando
                  en todo caso, la normatividad vigente sobre protección de
                  datos personales. No obstante la presente autorización, me
                  reservo el derecho a ejercer en cualquier momento la
                  posibilidad de conocer, actualizar, rectificar y solicitar la
                  supresión de mis datos personales en la base de datos de la
                  organización, cuando así lo estime conveniente.
                </p>

                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <Label htmlFor="accept" className="flex">
                    I agree with the&nbsp;
                    <a
                      href="#"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      terms and conditions
                    </a>
                  </Label>
                </div>
               
              </div> */}


<div className=" grid grid-cols-4 gap-2  mt-4 ">
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
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}