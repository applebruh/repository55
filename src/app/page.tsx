import Link from "next/link";

const mockUrls = ["https://wpbbgryfpc.ufs.sh/f/wvGrvGpYArdhuesmVmki0eNEPhlZ2uoCaW7KtSysgHTJGjn3",
	"https://wpbbgryfpc.ufs.sh/f/wvGrvGpYArdhAo3WbfmPTUmNOqRAWtufh0HJZc4Q19DYovjX",
	"https://wpbbgryfpc.ufs.sh/f/wvGrvGpYArdhERzqnVT83uk5RYroqtlyGdm0aOjAZigIU4cx"
	]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}
