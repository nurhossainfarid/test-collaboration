import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Next js</h1>
      <Button>Start</Button>
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </main>
  );
}
