import './Stlye.css';
 
const ExpenceItem =()=>{
    
    const expenseDate1 = new Date(2023, 8, 22);
    const expenseTitle1 = 'Car Insurance';
    const expenseAmount1 = 294.67;

    const expenseDate2 = new Date(2023, 8, 22);
    const expenseTitle2 = 'Bike Insurance';
    const expenseAmount2 = 150.90;
  
    const expenseDate3 = new Date(2023, 8, 22);
    const expenseTitle3 = 'Cycle Insurance';
    const expenseAmount3 = 100.70;

    const expenseDate4 = new Date(2023, 8, 22);
    const expenseTitle4 = 'mobile Insurance';
    const expenseAmount4 = 50.50;
  
  
    return (
        <div>
      <div className='expense-item'>
        <div>{expenseDate1.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{expenseTitle1}</h2>
          <div className='expense-item__price'>${expenseAmount1}</div>
        </div>
      </div>
      <div className='expense-item'>
        <div>{expenseDate2.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{expenseTitle2}</h2>
          <div className='expense-item__price'>${expenseAmount2}</div>
        </div>
      </div>
      <div className='expense-item'>
        <div>{expenseDate3.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{expenseTitle3}</h2>
          <div className='expense-item__price'>${expenseAmount3}</div>
        </div>
      </div>
      <div className='expense-item'>
        <div>{expenseDate4.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{expenseTitle4}</h2>
          <div className='expense-item__price'>${expenseAmount4}</div>
        </div>
      </div>
      </div>
    );
}


export default ExpenceItem;