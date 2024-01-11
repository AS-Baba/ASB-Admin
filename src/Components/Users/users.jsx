import { Images } from "../../images";

const Users = () => {

    return (

        <div className="row ">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Order Status</h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </th>
                                    <th> Client Name </th>
                                    <th> Order No </th>
                                    <th> Product Cost </th>
                                    <th> Project </th>
                                    <th> Payment Mode </th>
                                    <th> Start Date </th>
                                    <th> Payment Status </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src={Images.face_15} alt="" />
                                        <span className="pl-2">Abubakar Salihu</span>
                                    </td>
                                    <td> 02312 </td>
                                    <td> $14,500 </td>
                                    <td> Dashboard </td>
                                    <td> Credit card </td>
                                    <td> 04 Dec 2019 </td>
                                    <td>
                                        <div className="badge badge-outline-success">
                                            Approved
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src={Images.face_2} alt="" />
                                        <span className="pl-2">Estella Bryan</span>
                                    </td>
                                    <td> 02312 </td>
                                    <td> $14,500 </td>
                                    <td> Website </td>
                                    <td> Cash on delivered </td>
                                    <td> 04 Dec 2019 </td>
                                    <td>
                                        <div className="badge badge-outline-warning">
                                            Pending
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src={Images.face_5} alt="" />
                                        <span className="pl-2">Lucy Abbott</span>
                                    </td>
                                    <td> 02312 </td>
                                    <td> $14,500 </td>
                                    <td> App design </td>
                                    <td> Credit card </td>
                                    <td> 04 Dec 2019 </td>
                                    <td>
                                        <div className="badge badge-outline-danger">
                                            Rejected
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src={Images.face_3} alt="" />
                                        <span className="pl-2">Peter Gill</span>
                                    </td>
                                    <td> 02312 </td>
                                    <td> $14,500 </td>
                                    <td> Development </td>
                                    <td> Online Payment </td>
                                    <td> 04 Dec 2019 </td>
                                    <td>
                                        <div className="badge badge-outline-success">
                                            Approved
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-muted m-0">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src={Images.face_4} alt="" />
                                        <span className="pl-2">Sallie Reyes</span>
                                    </td>
                                    <td> 02312 </td>
                                    <td> $14,500 </td>
                                    <td> Website </td>
                                    <td> Credit card </td>
                                    <td> 04 Dec 2019 </td>
                                    <td>
                                        <div className="badge badge-outline-success">
                                            Approved
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;