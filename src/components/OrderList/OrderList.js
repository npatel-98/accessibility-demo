import React from "react";

function OrderList() {
  return (
    <section id="orderList" className="pt-[80px] pb-[60px]">
      <div className="container mx-auto">
        <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
            List item one
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque vel dapibus libero.</li>
            </ul>
          </li>
          <li>
            List item two
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque vel dapibus libero.</li>
            </ul>
          </li>
          <li>
            List item three
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Proin rhoncus feugiat justo non varius. Pellentesque vel dapibus libero.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque vel dapibus libero.</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default OrderList;
