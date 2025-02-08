'use client'
import { useParams } from 'next/navigation'
import { trainingProgram } from '../../utils/training_program'
const TrainingProgramId = () => {
  const params = useParams()
  const trainingProgramId = params.id

  // Find the order based on the ID
  const selectedProgram = trainingProgram.find(
    (item) => item.id === Number(trainingProgramId)
  )
  return (
    <div className="bg-white flex flex-col pb-[8rem]">
      <div className="xl:ml-[20rem] mt-8 bg-[#F2F2F2] flex flex-col px-4 w-[90%] lg:w-[1014px] rounded-xl mx-auto mb-8 pb-8">
        <div className="mt-4">
          <h1 className="font-semibold sm:text-xl text-lg">
            Training Program #{selectedProgram?.id}
          </h1>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex gap-4">
            <h1 className="sm:text-xl ">Title:</h1>
            <h1 className="text-gray-600 text-lg whitespace-nowrap">
              {selectedProgram?.title}
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <h1 className="sm:text-xl ">Description:</h1>
            <h1 className="text-gray-600 lg:w-[400px] w-[700px] text-">
              {selectedProgram?.description}
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <h1 className="sm:text-xl whitespace-nowrap">Start Date:</h1>
            <h1 className="text-gray-600 w-[400px] sm:text-lg">
              {selectedProgram?.start_date}
            </h1>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <h1 className="sm:text-xl whitespace-nowrap">End Date:</h1>
            <h1 className="text-gray-600 w-[400px] sm:text-lg">
              {selectedProgram?.end_date}
            </h1>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <h1 className="sm:text-xl whitespace-nowrap">Price:</h1>
            <h1 className="text-gray-600 w-[400px] sm:text-lg">
              ₦{selectedProgram?.price}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingProgramId
