import React from 'react';

const Faq = () => {
    return (
        <div className='my-4 space-y-3'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Answers to Your Questions</h2>
            <p className='text-slate-500 '>Have questions about using Learners for your online group study needs? Explore our FAQ section  <br />for helpful answers to commonly asked questions.</p>

<div className='flex gap-4 flex-col md:flex-row py-10'>
    <div className='md:w-1/2 space-y-3'><div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How do I create a new assignment?
  </div>
  <div className="collapse-content"> 
    <p>Simply navigate to the "Create Assignment" section, fill in the required details, and click submit to share it with your study group</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I invite friends to join my study group?  </div>
  <div className="collapse-content"> 
    <p>Yes, you can easily invite friends to join your study group by sending them an invitation link or adding them directly through their usernames. </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What types of assignments can I create on Learners?
  </div>
  <div className="collapse-content"> 
    <p>Learners allows you to create a wide range of assignments, including homework tasks, quizzes, projects, essays, and more. </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is Learners suitable for all academic levels and subjects?  </div>
  <div className="collapse-content"> 
    <p>Yes, Learners is designed to accommodate learners of all ages and academic levels. Whether you're studying mathematics, science, literature, or any other subject, you can use Learners to collaborate with friends, complete assignments, and enhance your learning experience.
</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I access Learners on my mobile device?

</div>
  <div className="collapse-content"> 
    <p>Yes, Learners is designed to be mobile-friendly, allowing you to access the platform from any device with internet connectivity. Whether you're using a smartphone, tablet, or laptop, you can enjoy a seamless and optimized user experience on Learners.</p>
  </div>
</div>

</div>
<img src="https://i.postimg.cc/kgHYf5g1/pexels-william-fortunato-6140673.jpg" className='md:w-1/2 rounded-xl' alt="" />
</div>

        </div>
    );
};

export default Faq;