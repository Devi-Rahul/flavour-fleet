import { useState } from 'react';
const Menu = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        { id: 1, name: "Bruschetta", description: "Toasted bread with tomatoes, garlic and basil", price: "$8.99" },
        { id: 2, name: "Calamari", description: "Crispy fried squid with lemon aioli", price: "$12.99" },
        { id: 3, name: "Stuffed Mushrooms", description: "Mushroom caps filled with herbed cheese", price: "$10.99" },
        { id: 4, name: "Spring Rolls", description: "Vegetable spring rolls with sweet chili sauce", price: "$9.99" }
      ]
    },
    {
      name: "Main Courses",
      items: [
        { id: 5, name: "Truffle Pasta", description: "Fettuccine with black truffle cream sauce", price: "$18.99" },
        { id: 6, name: "Grilled Salmon", description: "Atlantic salmon with lemon butter sauce", price: "$22.99" },
        { id: 7, name: "Beef Tenderloin", description: "8oz grass-fed beef with red wine reduction", price: "$26.99" },
        { id: 8, name: "Vegetable Risotto", description: "Creamy arborio rice with seasonal vegetables", price: "$16.99" },
        { id: 9, name: "Chicken Parmesan", description: "Breaded chicken with marinara and mozzarella", price: "$19.99" },
        { id: 10, name: "Lamb Chops", description: "Herb-marinated lamb with mint jelly", price: "$24.99" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { id: 11, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$8.99" },
        { id: 12, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$9.99" },
        { id: 13, name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar top", price: "$8.99" },
        { id: 14, name: "Cheesecake", description: "New York style with berry compote", price: "$7.99" }
      ]
    },
    {
      name: "Drinks",
      items: [
        { id: 15, name: "Signature Cocktails", description: "Ask server for daily specials", price: "$12.99" },
        { id: 16, name: "Wine Selection", description: "Red, white or sparkling by the glass", price: "$9.99-$15.99" },
        { id: 17, name: "Craft Beers", description: "Local and imported selections", price: "$6.99-$8.99" },
        { id: 18, name: "Non-Alcoholic", description: "Fresh juices, sodas and mocktails", price: "$4.99-$6.99" }
      ]
    },
    {
      name: "Specials",
      items: [
        { id: 19, name: "Chef's Tasting Menu", description: "5-course seasonal tasting experience", price: "$59.99" },
        { id: 20, name: "Weekend Brunch", description: "Available Saturdays and Sundays 10am-2pm", price: "$24.99" },
        { id: 21, name: "Kids Menu", description: "Smaller portions for children under 12", price: "$8.99-$12.99" }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="menu-categories">
          <button 
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {menuCategories.map(category => (
            <button
              key={category.name}
              className={activeCategory === category.name ? "active" : ""}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {menuCategories.map(category => (
          (activeCategory === "All" || activeCategory === category.name) && (
            <div key={category.name} className="menu-category-section">
              <h3 className="category-title">{category.name}</h3>
              <div className="menu-items">
                {category.items.map(item => (
                  <div className="menu-item" key={item.id}>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Menu;