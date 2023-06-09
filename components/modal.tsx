import { useProjectStore } from '@/store/ProjectStore'
import { Dialog, Transition } from '@headlessui/react'
import { FormEvent, Fragment, useState } from 'react'

export default function MyModal({ buttonTitle }: { buttonTitle: string }) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState("")
    let [isOpen, setIsOpen] = useState(false)

    const [createProject] = useProjectStore((state) => [
        state.createProject,
    ]);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createProject(title, desc, link, image)
        setTitle("")
        setDesc("")
        setLink("")
        setImage("")
        closeModal();
    }

    const disabledButton = () => {
        if (title === "" || desc === "" || link === "" || image === "") {
            return true;
        } else {
            return false;
        }
    }


    return (
        <>
            <div className="flex justify-center items-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex flex-row justify-center items-center rounded-md bg-white bg-opacity-20 px-4 py-2 space-x-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <div>Add {buttonTitle}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add a new project
                                    </Dialog.Title>
                                    <form onSubmit={handleCreatePost}>
                                        <div className="mt-2">
                                            <p className="space-x-3 text-sm justify-start text-gray-500">
                                                <label htmlFor="title">Title:</label>
                                                <input required onChange={(e) => setTitle(e.target.value)} className="border border-width-2 px-2" id="title" placeholder="Title" />
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="space-x-3 text-sm text-gray-500">
                                                <label htmlFor="title">Description:</label>
                                                <input required onChange={(e) => setDesc(e.target.value)} className="border border-width-2 px-2" id="title" placeholder="Description" />
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="space-x-3 text-sm text-gray-500">
                                                <label htmlFor="title">Link:</label>
                                                <input required onChange={(e) => setLink(e.target.value)} className="border border-width-2 px-2" id="title" placeholder="Link" />
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="space-x-3 text-sm text-gray-500">
                                                <label htmlFor="title">Image:</label>
                                                <input required onChange={(e) => setImage(e.target.value)} className="border border-width-2 px-2" id="title" placeholder="Image" />
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            {disabledButton() ?
                                                <button disabled></button>
                                                :
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                >
                                                    Create Project
                                                </button>
                                            }
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
