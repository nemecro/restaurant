function renderMenu(){
    const menuHead = document.createElement('h1');
    const menuDiv = document.createElement('div');

    menuHead.textContent = "Menu";
    menuDiv.id = 'menu';

    menuDiv.innerHTML = `
      <h2>Single rolls</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price (per piece)</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Hosomaki</td>
                            <td>$0.25</td>
                        </tr>
                        <tr>
                            <td>Futomaki</td>
                            <td>$1.00</td>
                        </tr>
                        <tr>
                            <td>California rolls</td>
                            <td>$1.5</td>
                        </tr>
                        <tr>
                            <td>Shrimps</td>
                            <td>$2</td>
                        </tr>
                        <tr>
                            <td>Futomaki</td>
                            <td>$1.25</td>
                        </tr>
                </tbody>
            </table>

            <h2>Lunches</h2>
            <table>
                <thead>
                    <tr>
                      <th>Lunch Option</th>
                      <th>Contents</th>
                      <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Kayto Combo</td>
                      <td>Spicy tuna roll, California roll, and a side of miso soup</td>
                      <td>$12.95</td>
                    </tr>
                    <tr>
                      <td>Toro Temptation</td>
                      <td>Seared toro sashimi, served with wasabi and pickled ginger 
                                  (includes a small salad or edamame)</td>
                      <td>$15.95</td>
                    </tr>
                    <tr>
                      <td>Veggie Delight</td>
                      <td>Veggie roll filled with avocado, cucumber, and carrot</td>
                      <td>$9.95</td>
                    </tr>
                    <tr>
                      <td>Katsu Curry Box</td>
                      <td>Breaded and fried chicken katsu, served with steamed rice, miso 
                                  soup, and a side of spicy curry sauce</td>
                      <td>$11.95</td>
                    </tr>
                    <tr>
                      <td>Spicy Tuna Bento</td>
                      <td>Spicy tuna roll, steamed edamame, and a small salad</td>
                      <td>$13.95</td>
                    </tr>
                    <tr>
                      <td>Classic Combo</td>
                      <td>California roll, chicken teriyaki, and a side of steamed rice</td>
                      <td>$10.95</td>
                    </tr>
                </tbody>
              </table>      
    
    `;

    content.append(menuHead, menuDiv);
}

export {renderMenu};