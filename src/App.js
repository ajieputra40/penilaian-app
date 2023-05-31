import React, { useState } from "react";

const App = () => {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleChange = (aspek, mahasiswa, nilai) => {
    setPenilaian((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...prevPenilaian[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSimpan = () => {
    const formattedPenilaian = {};

    Object.keys(penilaian).forEach((aspek) => {
      formattedPenilaian[aspek] = {};

      Object.keys(penilaian[aspek]).forEach((mahasiswa) => {
        formattedPenilaian[aspek][`mahasiswa_${mahasiswa}`] =
          penilaian[aspek][mahasiswa];
      });
    });

    console.log(JSON.stringify(formattedPenilaian));
    // Kirim data ke server atau lakukan operasi lain sesuai kebutuhan dosen
  };

  return (
    <div>
      <h1>Penilaian Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((mahasiswa) => (
            <tr key={mahasiswa}>
              <td>Mahasiswa {mahasiswa}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleChange(
                      "aspek_penilaian_1",
                      mahasiswa,
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleChange(
                      "aspek_penilaian_2",
                      mahasiswa,
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleChange(
                      "aspek_penilaian_3",
                      mahasiswa,
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleChange(
                      "aspek_penilaian_4",
                      mahasiswa,
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSimpan}>Simpan</button>
    </div>
  );
};

export default App;
