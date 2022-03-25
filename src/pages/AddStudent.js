function AddStudent() {
  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3">
        <div className="row justify-content-center">
          <div className="card p-4 mt-5 bg-light">
            <h2>Add Student</h2>
            <form>
              <div className="form-group mb-3">
                <label for="studentname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentname"
                  name="studentname"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="studentemail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentemail"
                  name="studentemail"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="courseenrolled">Course</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseenrolled"
                  name="courseenrolled"
                  value=""
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
