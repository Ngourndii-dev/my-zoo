import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message est trop court"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input {...register("name")} placeholder="Nom" className="border p-2" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input {...register("email")} placeholder="Email" className="border p-2" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <textarea {...register("message")} placeholder="Message" className="border p-2"></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <button type="submit" className="bg-blue-500 text-white p-2">Envoyer</button>
        </form>
      </main>
    </>
  );
}
