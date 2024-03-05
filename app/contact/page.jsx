import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <section className="flex flex-row justify-center h-full">
        <div className="flex flex-col items-center w-1/2 pr-10 space-y-8 border-r border-gray-400">
          <h2 className="text-3xl font-bold sm:text-6xl">contact me.</h2>

          <div className="flex items-center p-2 border rounded">
            <div className="w-10 h-10 mr-2">
              <img src="gmail.png" alt="icon" className="rounded" />
            </div>
            <div className="flex-1 text-left">madzambaprince111@gmail.com</div>
          </div>

          <div className="flex items-center p-2 border rounded">
            <div className="w-10 h-10 mr-2">
              <img src="linkedin.png" alt="icon" className="rounded" />
            </div>
            <div className="flex-1 text-left">prince madzamba</div>
          </div>

          <div className="flex items-center p-2 border rounded">
            <div className="w-10 h-10 mr-2">
              <img src="cell.png" alt="icon" className="rounded" />
            </div>
            <div className="flex-1 text-left">+263 775 784 982</div>
          </div>

          <div className="flex items-center p-2 border rounded">
            <div className="w-10 h-10 mr-2">
              <img src="twitterx.png" alt="icon" className="rounded" />
            </div>
            <div className="flex-1 text-left">@so_m3times</div>
          </div>

          <div className="flex items-center p-2 border rounded">
            <div className="w-10 h-10 mr-2">
              <img src="instagram.png" alt="icon" className="rounded" />
            </div>
            <div className="flex-1 text-left">@_so.metimes</div>
          </div>

        </div>
        <div className="flex flex-col items-center w-1/2 pl-10 space-y-8">
          <h2 className="text-3xl font-bold sm:text-6xl">talk to me.</h2>
          <p>your email address will not be published.</p>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block" htmlFor="name">
                name.
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="text-black bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block" htmlFor="email">
                email.
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                className="text-black bg-white"
              />
            </div>
            <div className="space-y-2 md:col-start-2 md:row-start-1">
              <label className="block" htmlFor="message">
                message.
              </label>
              <Textarea
                className="min-h-[150px] max-h-[150px] resize-none bg-white text-black"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div className="flex flex-col col-start-1 md:col-start-2">
              <Button
                size="sm"
                type="submit"
                className="text-black bg-transparent border border-black hover:bg-black hover:text-white"
              >
                post.
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
