const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;

    fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      document.location.replace('/dashboard/');
  };

  const deleteClickHandler = async function() {
    await fetch(`/api/post/${postId}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/dashboard');
  };
  
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);