export default function ProductImage({ productImg, setproductImg }) {

    const handleProfileImage = async (event) => {
        const file = event.target.files[0];

        if(!file) {
            return;
        } else {
            setproductImg("")
            
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = (event) => {
                if (reader.readyState === 2) {
                    const imgUrl = event.target.result;

                    setproductImg(imgUrl)
                }
            }
        }
    }

    const deleteImage = () => {
        setproductImg("/upload_basic.png");
    }

    return (
        <div>
            <div className="relative" style={{position: "relative"}}>
                <img
                    src={productImg}
                    alt="상품 이미지"
                    onClick={() => {
                        document.querySelector("#img").click();
                    }}
                />
                <div style={{position : "absolute", top:"0", right:"0"}}>
                    <button type="button" onClick={deleteImage}></button>
                </div>
            </div>

            <input
                id="img"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleProfileImage}
            />
        </div>
    );
}