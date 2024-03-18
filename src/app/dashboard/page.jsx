import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="p-2 sm:ml-60">
        <div className=" bg-white px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
          <div className="p-2 border-2 border-dashed rounded-lg dark:border-red-500 mt-2">
            <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
             

              <div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          <Link
                            href={"/disciplinas"}
                            className="flex items-center p-2
                            text-gray-900 rounded-lg
                            dark:text-gray-600           
                            dark:hover:bg-red-500 text-red-500 group"
                          >
                         Documentos Cargados
                          </Link> 
                          <hr />
                          <h1 className="text-5xl text-bold font-mono text-red-700 mt-10">
                            {250}
                          </h1>
                        </div>
    
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-yellow-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                      <div className="text-base font-semibold text-gray-600">
                          <Link
                            href={"/dashboard"}
                            className="flex items-center p-2
                            text-gray-900 rounded-lg
                            dark:text-gray-600           
                            dark:hover:bg-red-500 text-red-500 group"
                          >
                         Total Solicitudes realizadas
                          </Link> 
                          <hr />
                          <h1 className="text-5xl text-bold font-mono text-red-700 mt-10">
                            {250}
                          </h1>
                        </div>
        
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-green-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                      <div className="text-base font-semibold text-gray-600">
                          <Link
                            href={"/dashboard"}
                            className="flex items-center p-2
                            text-gray-900 rounded-lg
                            dark:text-gray-600           
                            dark:hover:bg-red-500 text-red-500 group"
                          >
                          Test Realizados
                          </Link> 
                          <hr />
                          <h1 className="text-5xl text-bold font-mono text-gray-700 mt-10">
                            {250}
                          </h1>
                        </div>

                      </div>
                    </div>
                  </div>

         
                </div>

                <div className="grid grid-cols-12 gap-2 mt-4"></div>
              </div>
            </div>

            {/* <footer className="text-xs p-5  text-gray-500/90 ">
              LAB DEPORTIVO SKILLZ UP
              <br />
              Medimos y Potenciamos tus Habilidades <br />
              Tecnología Deportiva <br />
              Medellin - 2023
            </footer> */}
          </div>
        </div>
      </div>
    </>
  );
}