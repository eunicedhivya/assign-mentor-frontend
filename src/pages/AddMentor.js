function AddMentor() {
  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3">
        <div className="row justify-content-center">
          <div className="card p-4 mt-5 bg-light">
            <h2>Add Mentor</h2>
            <form>
              <div className="form-group mb-3">
                <label for="mentorname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="mentorname"
                  name="mentorname"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="mentoremail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="mentoremail"
                  name="mentoremail"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="courseassigned">Course</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseassigned"
                  name="courseassigned"
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

export default AddMentor;
