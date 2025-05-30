'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { loginSchema, loginSchemaType, registerSchema, registerSchemaType } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"]
})


export const SignInView = () => {
  const router = useRouter()

  const trpc = useTRPC()
  const login = useMutation(trpc.auth.login.mutationOptions({
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      router.push("/")
    }
  }))

  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: loginSchemaType) => {
    login.mutate(values)
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-8 p-4 lg:p-16'
          >
            <div className='flex items-center justify-between mb-8'>
              <Link href="/">
                <span className={cn(
                  "text-2xl font-semibold", poppins.className
                )}>
                  JoyTrail
                </span>
              </Link>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className='text-base border-none underline'
              >
                <Link prefetch href="/sign-up">
                  Sign up
                </Link>
              </Button>
            </div>
            <h1 className='text-4xl font-medium'>
              Welcome to JoyTrail!
            </h1>

            <FormField
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={login.isPending}
              type="submit"
              size="lg"
              variant="elevated"
              className='bg-black text-white hover:bg-pink-400 hover:text-primary'
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
      <div
        style={{
          backgroundImage: "url('/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="h-screen w-full lg:col-span-2 hidden lg:block"
      >
      </div>
    </div>
  )
}
