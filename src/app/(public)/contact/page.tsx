"use client"
import "./contact.css";
import Image from "next/image";

import Twitter from "../../../../public/assets/iconsItemTech/contact/twitter.svg";
import GitHub from "../../../../public/assets/iconsItemTech/contact/mdi_github.svg";
import Locate from "../../../../public/assets/iconsItemTech/contact/locate.svg";
import Language from "../../../../public/assets/iconsItemTech/contact/language.svg";
import Email from "../../../../public/assets/iconsItemTech/contact/email.svg";
import Phone from "../../../../public/assets/iconsItemTech/contact/phone.svg";
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../../../components/Form'

const userSchema = z.object({
  email: z.string().min(1, {
    message: 'Email é obrigatório',
  }).email({
    message: 'Formato de e-mail inválido'
  }).toUpperCase(),
  name: z.string().min(1,  {
    message: 'Nome é obrigatório',
  }).toUpperCase(),
  text: z.string().min(1, {
    message: 'Texto é obrigatório',
  }).toUpperCase(),
})

type UserData = z.infer<typeof userSchema>


export default function Contact() {
  const [output, setOutput] = useState('')
  const UserForm = useForm<UserData>({
    resolver: zodResolver(userSchema),
  })
  async function userText(data: UserData) {
    setOutput(JSON.stringify(data, null, 3))
  }
  const { 
    handleSubmit, 
    formState: { isSubmitting }, 
  } = UserForm;

  return (
      <section className="py-12 px-24 bg-[#2A2E35]">
        <div className="font-firaCode">
        <div className="mainTitle">
          <h2>About <span>me</span><span className="bgText">About me</span></h2>
        </div>
          <div className="flex flex-col pt-12">
            <div className="flex-2 justify-center items-center text-center">
              <h4 className="mt-4 text-4xl uppercase">Contact me here</h4>
              <p className="my-4 mx-0 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                laborum numquam? Quam excepturi perspiciatis quas quasi.
              </p>
              <div className="">
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-40-1fr items-center justify-center">
                    <Image src={Locate} alt="" />
                    <span>Localização</span>
                  </div>
                  <p className="my-2 mx-0">: Paraíba, João Pessoa</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-40-1fr items-center justify-center">
                    <Image src={Email} alt="" />
                    <span>Email</span>
                  </div>
                  <p>: gustaf_alfredo@outlook.com</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-40-1fr items-center justify-center">
                    <Image src={Phone} alt="" />
                    <span>Celular</span>
                  </div>
                  <p>: (83) 99338-6900 </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-40-1fr items-center justify-center">
                    <Image src={Language} alt="" />
                    <span>Linguagens</span>
                  </div>
                  <p>: Português e Inglês</p>
                </div>
              </div>
              <div>
                <div className="flex mt-8">
                  <a href="" className="flex items-center justify-center bg-[#972DA8] hover:bg-violet-600 text-zinc-300 cursor-pointer w-14 h-14 rounded-full my-0 mx-1">
                    <Image src={GitHub} alt="" />
                  </a>
                  <a href="" className="flex items-center justify-center bg-[#972DA8] hover:bg-violet-600 text-zinc-300 cursor-pointer w-14 h-14 rounded-full my-0 mx-1">
                    <Image src={Twitter} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-3 ml-12 pb-8 gap-8">
              <FormProvider {...UserForm}> 
                <form
                  onSubmit={handleSubmit(userText)}
                  className="flex flex-col gap-4 w-3/4 justify-center m-auto"
                >
                  <Form.Field>
                    <Form.Label htmlFor="name">
                      Nome
                    </Form.Label>
                    <Form.Input type="text" name="name" />
                    <Form.ErrorMessage field="name"/>                
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor="email">
                      Email
                    </Form.Label>
                    <Form.Input type="email" name="email" />
                    <Form.ErrorMessage field="E-Mail"/>                
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor="text">
                      Texto
                    </Form.Label>
                    <Form.TextArea cols={5} rows={5} text="text" name="text" />
                    <Form.ErrorMessage field="text"/>                
                  </Form.Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#972DA8] text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600"
                  >
                    Entrar
                  </button>
                  
                </form>
              </FormProvider>
            </div>
          </div>
        </div>

        {output && (
        <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
          {output}
        </pre>
      )}
      </section>
     
  );
}
