import { Button } from "@mantine/core";

export default function DownloadBtn() {
  return (
    <div className="flex justify-center">
      <Button
        unstyled
        className="py-3 px-8 border border-white/40 rounded-[10px] cursor-pointer 
                   hover:bg-[#1b1b1b] hover:border-[#3BC088] 
                   hover:scale-105 hover:text-[#3BC088] 
                   duration-200 ease-in-out active:scale-100"
        type="submit"
      >
        Als XLS Herunterladen
      </Button>
    </div>
  );
}
