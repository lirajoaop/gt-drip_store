import SearchIcon from "../assets/SearchIcon.svg";

export default function SearchInput({ placeholder, disabled, onChange, value = "", }) {
  
    const ControlledInput = () => {
         return (
            <input
               type="text"
               onChange={onChange}
               disabled={disabled}
               value={value}
               placeholder={placeholder}
               className={`flex-1 bg-white dark:bg-darkGray text-base placeholder:text-sm text-black dark:text-white" +
                " focus-within:ring-0 focus:outline-none `}
            />
         );
      };
      
       return (
      <div className="flex gap-3 flex-1 bg-white items-center py-3 px-5 rounded-2xl border  drop-shadow-3xl h-full max-lg:w-full">
         {ControlledInput()}
         <div className="pr-4">
        <img src={SearchIcon} alt="" className="w-6 h-6" />

         </div>
      </div>
   );
}
