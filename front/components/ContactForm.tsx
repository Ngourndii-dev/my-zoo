import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import { Footer } from "./Footer";

const contactSchema = z.object({
  name: z.string().min(2, "The name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "The message is too short"),
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
    <div 
      className="min-h-screen text-white relative"
      style={{ 
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('/contact.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-slate-900/80 rounded-xl shadow-2xl p-8 backdrop-blur-xl border border-slate-800/60">
          <h1 className="text-4xl font-bold text-center mb-8 text-white 
                        bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
                        drop-shadow-lg">
            Contact Us
          </h1>
          
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <input 
                {...register("name")} 
                placeholder="Full Name" 
                className="w-full px-6 py-3.5 bg-slate-900/70 border-2 border-slate-700/50 rounded-xl text-white 
                      placeholder-slate-400 focus:outline-none transition-all duration-300 shadow-lg resize-none" 
              />
              {errors.name && <p className="text-rose-400 ml-2 text-sm font-medium animate-pulse">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <input 
                {...register("email")} 
                placeholder="Email Address" 
                type="email"
                className="w-full px-6 py-3.5 bg-slate-900/70 border-2 border-slate-700/50 rounded-xl text-white 
                      placeholder-slate-400 focus:outline-none transition-all duration-300 shadow-lg resize-none" 
              />
              {errors.email && <p className="text-rose-400 ml-2 text-sm font-medium animate-pulse">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
            <textarea 
            {...register("message")} 
            placeholder="Your message..." 
            rows={5}
            className="w-full px-6 py-3.5 bg-slate-900/70 border-2 border-slate-700/50 rounded-xl text-white 
                      placeholder-slate-400 focus:outline-none transition-all duration-300 shadow-lg resize-none" 
          />

              {errors.message && <p className="text-rose-400 ml-2 text-sm font-medium animate-pulse">{errors.message.message}</p>}
            </div>

           <button 
            type="submit" 
            className="mt-4 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold 
                      rounded-lg transition-all duration-300 w-fit max-w-[200px] mx-auto
                      border-2 border-slate-800 hover:border-slate-700
                      shadow-md hover:shadow-lg hover:shadow-blue-900/30
                      transform hover:scale-[1.02] active:scale-95"
          >
            Send Message
          </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
