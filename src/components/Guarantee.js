
import Icon1 from "../assets/benefit/trophy 1.png";
import Icon2 from "../assets/benefit/guarantee.png";
import Icon3 from "../assets/benefit/shipping.png";
import Icon4 from "../assets/benefit/customer-support.png";

const guarantees = [
  {
    id: 1,
    icon: Icon1,
    title: "High Quality",
    content: "crafted from top materials",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Warranty Protection",
    content: "Over 2 years",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Free Shipping",
    content: "Order over 150 $",
  },
  {
    id: 4,
    icon: Icon4,
    title: "24 / 7 Support",
    content: "Dedicated support",
  },
];
function Guarantee() {
  return (
    <div className="guarantee">
      <div className="guarantee-container d-flex justify-content-between container">
        {guarantees.map((item) => {
          return (
            <div
              className="guarantee-item d-flex align-items-center"
              key={item.id}
            >
              <img src={item.icon} />
              <div className="guarantee-item-text">
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Guarantee;