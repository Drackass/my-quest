"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email must be at most 50 characters long"),
});

export default function NewsLetter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const t = useTranslations("newsLetter");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios.post(`/api/addSubscription`, values);
      toast.success("You have been subscribed to the newsletter");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      className="w-full max-w-screen-md mx-auto px-5 lg:px-0 mb-12"
      id="news-letter"
    >
      <div className="bg-secondary p-8 rounded-xl text-sm text-muted-foreground space-y-3">
        <p>{t("title")}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-5 items-end"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  {/* <FormDescription>{t("title")}</FormDescription> */}
                  <FormControl>
                    <Input placeholder="you@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {isLoading ? (
                <LoaderCircle
                className="animate-spin"
                 />
              ) : t("subscribeBtn")}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
