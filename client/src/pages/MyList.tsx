import BucketListModal from "components/MyList/BucketList/BucketListModal";
import CheckListModal from "components/MyList/CheckList/CheckListModal";

// Ctrl + Shift + L
function MyList() {
  return (
    <div className="grid text-center place-items-center w-auto mt-44">
      <div className="flex gap-x-20 max-lg:flex-col gap-y-20">
        <CheckListModal />
        <BucketListModal />
      </div>
    </div>
  );
}

export default MyList;
